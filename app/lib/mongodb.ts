import { MongoClient } from "mongodb";

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

// ✅ Build time pe crash na ho isliye lazy connection
function getClientPromise(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    // Build time pe dummy promise return karo - runtime pe kabhi call nahi hoga
    return Promise.reject(new Error("MONGODB_URI is not defined"));
  }

  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
      global._mongoClientPromise = new MongoClient(uri).connect();
    }
    return global._mongoClientPromise;
  }

  return new MongoClient(uri).connect();
}

const clientPromise: Promise<MongoClient> = getClientPromise();

export default clientPromise;