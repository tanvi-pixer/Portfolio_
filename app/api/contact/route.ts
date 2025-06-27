import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

// MongoDB connection string - you can update this with your database URL
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    const client = new MongoClient(MONGODB_URI);
    await client.connect();

    const db = client.db('portfolio');
    const collection = db.collection('contacts');

    // Insert the contact message
    const result = await collection.insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
      status: 'unread'
    });

    await client.close();

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