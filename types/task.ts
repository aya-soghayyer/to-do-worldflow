import express from 'express';
import { Tag } from '../db/entity/Tag.js';
namespace Task {
  export interface Item {
    id: string,
    user: number,
    title: string,
    description: string,
    status: "new" | "done"
  }

  export interface Request extends express.Request {
    body: {
      userId: number,
      title: string,
      description: string,
      tags : number[]
    },
    query: {
      page: string;
      pageSize: string;
    }
  }

  export interface Response extends express.Response {
    send: (body: string | {
      page: number,
      pageSize: number,
      total: number,
      items: Array<Item>   // Item[]
    }) => this
  }
}

export default Task;