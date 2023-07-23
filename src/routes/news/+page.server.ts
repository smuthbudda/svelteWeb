import type { Post } from '@prisma/client';
import prisma from '../../lib/prisma';

export const prerender = false;

export async function load(){
    const feed:Post[] = await prisma.post.findMany({
        where: { published: true },
        include: {
            author: {
                select: { name: true },
            },
        },
    });
    console.log(feed);
    return {
        News: feed
    };
};
