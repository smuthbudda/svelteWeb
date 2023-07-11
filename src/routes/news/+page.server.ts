import type { NewsArticle } from "../../dataObjects/objects";
import Enumerable from 'linq';
import prisma from '../../lib/prisma';
export const prerender = false;

export async function load(){
    const feed = await prisma.post.findMany({
        where: { published: true },
        include: {
            author: {
                select: { name: true },
            },
        },
    });
    return {
        news: feed
    };
};
