import { useState, useEffect } from 'react';
import { StarIcon } from '@heroicons/react/20/solid';
import { RadioGroup } from '@headlessui/react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchAllPostsByIdAsync, selectPostsById } from './PostsSlice';
import Button from '../../components/Button';


const colors = [
  { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
  { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
  { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
];
const sizes = [
  { name: 'XXS', inStock: false },
  { name: 'XS', inStock: true },
  { name: 'S', inStock: true },
  { name: 'M', inStock: true },
  { name: 'L', inStock: true },
  { name: 'XL', inStock: true },
  { name: '2XL', inStock: true },
  { name: '3XL', inStock: true },
];

const highlights = [
  'Hand cut and sewn locally',
  'Dyed with our proprietary colors',
  'Pre-washed & pre-shrunk',
  'Ultra-soft 100% cotton',
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
  

export default function PostDetail() {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[2]);
  const post = useSelector(selectPostsById);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchAllPostsByIdAsync(params.id));
  }, [dispatch, params.id]);

  return (
  <>
  {
    post &&  <div className="max-w-7xl min-h-screen bg-white mx-auto px-4 py-8">
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img className="w-full h-96 object-cover" src={post.imageSrc} alt="Post" />
      <div className="p-6">
        <h1 className="text-3xl font-semibold mb-2">{post.name}</h1>
        <p className="text-gray-600 mb-2">{post.date}</p>
        <p className="text-gray-800">{post.description}</p>
      </div>
    </div>
  </div>
  }
  </>
  );
}
