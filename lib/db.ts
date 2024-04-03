import { PrismaClient } from "@prisma/client";

declare global {
    /**
    * Global variable for Prisma client instance.
    * @var {PrismaClient|undefined} prisma
    */
    var prisma: PrismaClient | undefined;
}


/**
 * Prisma client instance.
 * If in production mode, it uses the global `prisma` instance if available,
 * otherwise creates a new instance.
 * @type {PrismaClient}
 * @const
 * @memberof module:db
 */
export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;