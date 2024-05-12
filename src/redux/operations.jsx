import { createAsyncThunk } from '@reduxjs/toolkit';
import { database } from '../firebase'
import { ref, get} from 'firebase/database';



export const fetchTeachers = createAsyncThunk(
  'teachers/fetchTeachers', // Префікс для створення action types
  async () => {
    try {
      const dbRef = ref(database, '/');
      const data = await get(dbRef);
      return data.val(); // Повертаємо дані з бази даних Firebase
    } catch (error) {
      console.error('Loading error', error.message);
      throw error; // Ретранслюємо помилку, щоб її можна було обробити в компоненті TeachersPage
    }
  }
);
