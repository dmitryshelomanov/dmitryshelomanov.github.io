import { defineMessage } from "@lingui/macro";
import { fib, tasks, sort, fraction, compose, curry } from "./code";

export const snipetsList = [
  {
    title: defineMessage({ message: "Числа Фибоначи" }),
    code: fib,
    id: "fib",
  },
  {
    title: defineMessage({ message: "Задачи с собеседований" }),
    code: tasks,
    id: "tasks",
  },
  {
    title: defineMessage({ message: "Сортировки" }),
    code: sort,
    id: "sort",
  },
  {
    title: defineMessage({ message: "Дробные части" }),
    code: fraction,
    id: "fraction",
  },
  {
    title: defineMessage({ message: "Композиция функций" }),
    code: compose,
    id: "compose",
  },
  {
    title: defineMessage({ message: "Каррирование функций" }),
    code: curry,
    id: "curry",
  },
];
