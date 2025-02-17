// List Queries - Used for displaying multiple items
export const LIST_QUERIES = {
  ALL: `*[_type in ["projects", "experiments"]] | order(date desc) {
    _id,
    _type,
    title,
    "slug": slug.current,
    date,
    headerImage,
    "headerVideo": headerVideo.asset->{
      _ref,
      url
    },
    thumbnailType,
    tags,
    details,
    category,
    primaryDescription,
    description
  }`,

  SIDEBAR_WORKS: `*[_type in ["projects", "experiments"]] | order(date desc) {
    _id,
    _type,
    title,
    "slug": slug.current,
    category,
    "rawCategory": category, // For debugging
    date,
    headerImage,
    "headerVideo": headerVideo.asset->{
      _ref,
      url
    },
    thumbnailType,
    tags,
    details
  }`
}

// Detail Queries - Used for single item pages
export const DETAIL_QUERIES = {
  CONTENT: `*[_type in ["projects", "experiments"] && slug.current == $slug][0]{
    _id,
    _type,
    title,
    subtitle,
    "slug": slug.current,
    group,
    tags,
    headerImage,
    "headerVideo": headerVideo.asset->{
      _ref,
      url
    },
    "video": {
      "url": video.url,
      "file": video.file,
      "fileUrl": video.file.asset->url,
      "caption": video.caption,
      "loop": video.loop,
      "autoplay": video.autoplay,
      "hideControls": video.hideControls,
      "muted": video.muted
    },
    thumbnailType,
    url,
    methods,
    date,
    credits,
    contributions,
    projectPath,
    primaryDescription,
    details,
    description,
    category
  }`
}
