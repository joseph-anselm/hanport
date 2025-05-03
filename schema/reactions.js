// schemas/reaction.js
export default {
    name: 'reaction',
    type: 'document',
    title: 'Reaction',
    fields: [
      {
        name: 'post',
        type: 'reference',
        to: [{ type: 'blogPost' }],
      },
      {
        name: 'type',
        type: 'string',
        options: {
          list: ['like', 'dislike'],
        },
      },
      {
        name: 'createdAt',
        type: 'datetime',
        initialValue: () => new Date().toISOString(),
      },
    ],
  };
  