import MyComponent from '../../../../slices/HeroSlice';

export default {
  title: 'slices/HeroSlice'
}


export const _Default = () => <MyComponent slice={{"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"heading1","text":"Wrapped","spans":[]}],"description":[{"type":"paragraph","text":"Esse aliqua amet elit in nulla enim.","spans":[]}],"link":{"link_type":"Web","url":"http://google.com"},"textlink":"do this now"},"id":"_Default","slice_type":"hero_slice"}} />
_Default.storyName = ''

export const _Herowithimage = () => <MyComponent slice={{"variation":"herowithimage","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"description":[{"type":"paragraph","text":"Ad ipsum excepteur eiusmod duis ex nostrud est commodo.","spans":[]}],"fullwidthimage":{"dimensions":{"width":1000,"height":1000},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1579931794097-0ad001e51edb?rect=0%2C0%2C3958%2C3958&w=1000&h=1000","mobile":{"dimensions":{"width":350,"height":525},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?rect=0%2C0%2C3560%2C5340&w=350&h=525"}}},"id":"_Herowithimage","slice_type":"hero_slice"}} />
_Herowithimage.storyName = ''
