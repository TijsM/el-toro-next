export type Category = {
  price: number;
  minAge: number;
  maxAge: number;
  isChild: boolean;
};

export type CategoryNames = "child1" | "child2" | "child3" | "child4" | "adult";

export type Categories = {
  [cateogryName in CategoryNames]: Category;
};

const CHILD_PRICE = 3;
const ADULT_PRICE = 10;

export const CATEGORIES: Categories = {
  child1: {
    price: CHILD_PRICE,
    minAge: 0,
    maxAge: 5,
    isChild: true,
  },
  child2: {
    price: CHILD_PRICE,
    minAge: 6,
    maxAge: 7,
    isChild: true,
  },
  child3: {
    price: CHILD_PRICE,
    minAge: 8,
    maxAge: 9,
    isChild: true,
  },
  child4: {
    price: CHILD_PRICE,
    minAge: 10,
    maxAge: 11,
    isChild: true,
  },
  adult: {
    price: ADULT_PRICE,
    minAge: 12,
    maxAge: 999,
    isChild: false,
  },
};
