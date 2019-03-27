const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

let todos = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false
  },
  {
    userId: 1,
    id: 3,
    title: 'fugiat veniam minus',
    completed: false
  },
  {
    userId: 1,
    id: 4,
    title: 'et porro tempora',
    completed: true
  },
  {
    userId: 1,
    id: 5,
    title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
    completed: false
  },
  {
    userId: 1,
    id: 6,
    title: 'qui ullam ratione quibusdam voluptatem quia omnis',
    completed: false
  },
  {
    userId: 1,
    id: 7,
    title: 'illo expedita consequatur quia in',
    completed: false
  },
  {
    userId: 1,
    id: 8,
    title: 'quo adipisci enim quam ut ab',
    completed: true
  },
  {
    userId: 1,
    id: 9,
    title: 'molestiae perspiciatis ipsa',
    completed: false
  },
  {
    userId: 1,
    id: 10,
    title: 'illo est ratione doloremque quia maiores aut',
    completed: true
  },
  {
    userId: 1,
    id: 11,
    title: 'vero rerum temporibus dolor',
    completed: true
  },
  {
    userId: 1,
    id: 12,
    title: 'ipsa repellendus fugit nisi',
    completed: true
  },
  {
    userId: 1,
    id: 13,
    title: 'et doloremque nulla',
    completed: false
  },
  {
    userId: 1,
    id: 14,
    title: 'repellendus sunt dolores architecto voluptatum',
    completed: true
  },
  {
    userId: 1,
    id: 15,
    title: 'ab voluptatum amet voluptas',
    completed: true
  },
  {
    userId: 1,
    id: 16,
    title: 'accusamus eos facilis sint et aut voluptatem',
    completed: true
  },
  {
    userId: 1,
    id: 17,
    title: 'quo laboriosam deleniti aut qui',
    completed: true
  },
  {
    userId: 1,
    id: 18,
    title: 'dolorum est consequatur ea mollitia in culpa',
    completed: false
  },
  {
    userId: 1,
    id: 19,
    title: 'molestiae ipsa aut voluptatibus pariatur dolor nihil',
    completed: true
  },
  {
    userId: 1,
    id: 20,
    title: 'ullam nobis libero sapiente ad optio sint',
    completed: true
  },
  {
    userId: 2,
    id: 21,
    title: 'suscipit repellat esse quibusdam voluptatem incidunt',
    completed: false
  },
  {
    userId: 2,
    id: 22,
    title: 'distinctio vitae autem nihil ut molestias quo',
    completed: true
  },
  {
    userId: 2,
    id: 23,
    title: 'et itaque necessitatibus maxime molestiae qui quas velit',
    completed: false
  }
];

export const get = async () => {
  await sleep(100);

  return todos;
};

export const getById = async id => {
  await sleep(100);

  return todos.find(item => item.id === id);
};

export const create = async data => {
  await sleep(100);

  todos.push(data);

  return todos;
};

export const update = async (id, data) => {
  const todo = todos.find(item => item.id === id);
  const newTodo = Object.assign(todo, data);

  return newTodo;
};

export const remove = async id => {
  todos = todos.filter(todo => todo.id !== id);

  return todos;
};
