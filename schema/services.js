// schemas/service.js
export default {
    name: 'service',
    title: 'Services',
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
        name: 'shortDescription',
        title: 'Short Description',
        type: 'text',
        rows: 3,
        validation: Rule => Rule.required()
      },
      {
        name: 'icon',
        title: 'Icon Name',
        type: 'string',
        options: {
          list: [
            {title: 'Flask', value: 'flask'},
            {title: 'Microscope', value: 'microscope'},
            {title: 'Chart', value: 'chart'},
            {title: 'Leaf', value: 'leaf'},
            {title: 'Water', value: 'water'},
            {title: 'University', value: 'university'}
          ]
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
        options: {
          list: [
            {title: 'Analytical Services', value: 'Analytical'},
            {title: 'Environmental', value: 'Environmental'},
            {title: 'Research', value: 'Research'},
            {title: 'Consulting', value: 'Consulting'}
          ]
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'featuredImage',
        title: 'Featured Image',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'body',
        title: 'Detailed Description',
        type: 'array',
        of: [
          {
            type: 'block'
          },
          {
            type: 'image',
            fields: [
              {
                name: 'alt',
                title: 'Alternative Text',
                type: 'string'
              }
            ]
          }
        ]
      },
      {
        name: 'features',
        title: 'Key Features',
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        name: 'applications',
        title: 'Potential Applications',
        type: 'array',
        of: [{type: 'string'}]
      }
    ],
    preview: {
      select: {
        title: 'title',
        category: 'category',
        media: 'featuredImage'
      },
      prepare(selection) {
        const {title, category, media} = selection
        return {
          title,
          media,
          subtitle: category
        }
      }
    }
  }