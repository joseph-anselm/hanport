// In your schema.js
export default {
    name: 'reaction',
    type: 'document',
    title: 'Reaction',
    fields: [
      {
        name: 'post',
        type: 'reference',
        to: [{ type: 'blogPost' }]
      },
      {
        name: 'type',
        type: 'string',
        title: 'Type',
        options: {
          list: [
            { title: 'Like', value: 'like' },
            { title: 'Dislike', value: 'dislike' }
          ]
        }
      }
    ]
  }