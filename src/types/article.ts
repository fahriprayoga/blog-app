import type { Component } from "vue";

export interface Article {
  id: number;
  title: string;
  category: string;
  component?: Component;
  content: string;
  author: string;
  image: string;
  date: string;
}
