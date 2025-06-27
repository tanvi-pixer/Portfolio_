import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

// MongoDB connection string - you can update this with your database URL
const MONGODB_URI = 'mongodb+srv://tanviladva01:portfolio22@cluster0.z6uuniu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const MONGODB_DB = 'portfolio';

let cached = (globalThis as any)._mongoClientPromise;
if (!cached) {
  cached = (globalThis as any)._mongoClientPromise = { client: null, promise: null };
}

export const dynamic = "force-dynamic";

async function connectToDatabase() {
  if (cached.client) {
    return cached.client;
  }
  if (!cached.promise) {
    cached.promise = new MongoClient(MONGODB_URI).connect();
  }
  cached.client = await cached.promise;
  return cached.client;
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, type, message } = await request.json();

    // Validate required fields
    if (!name || !email || !phone || !type || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const client = await connectToDatabase();
    const db = client.db(MONGODB_DB);
    console.log(">>>>>>")
    const collection = db.collection('contacts');

    // Insert the contact message
    const result = await collection.insertOne({
      name,
      email,
      phone,
      type,
      message,
      createdAt: new Date(),
      status: 'unread'
    });
    console.log("result", result);

    return NextResponse.json(
      { message: 'Contact message saved successfully', id: result.insertedId },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error saving contact message:', error);
    return NextResponse.json(
      { error: 'Failed to save contact message' },
      { status: 500 }
    );
  }
}