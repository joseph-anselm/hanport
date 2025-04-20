// schemas/research.js
export default {
    name: 'research',
    title: 'Research Projects',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        rows: 3,
        validation: Rule => Rule.required()
      },
      {
        name: 'type',
        title: 'Type',
        type: 'string',
        options: {
          list: [
            {title: 'Publication', value: 'Publication'},
            {title: 'Project', value: 'Project'},
            {title: 'Collaboration', value: 'Collaboration'}
          ]
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'year',
        title: 'Year',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'collaborators',
        title: 'Collaborators',
        type: 'array',
        of: [{type: 'string'}],
        validation: Rule => Rule.required()
      },
      {
        name: 'mainImage',
        title: 'Main Image',
        type: 'image',
        options: {
          hotspot: true
        }
      }
    ],
    preview: {
      select: {
        title: 'title',
        type: 'type',
        year: 'year',
        media: 'mainImage'
      },
      prepare(selection) {
        const {title, type, year, media} = selection
        return {
          title,
          media,
          subtitle: `${type} (${year})`
        }
      }
    }
  }