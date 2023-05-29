import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/taskActions';

const NewTaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ title, description });
    setTitle('');
    setDescription('');
  
   }
}   