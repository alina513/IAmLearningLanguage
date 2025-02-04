import { createAsyncThunk } from '@reduxjs/toolkit';
import { database } from '../firebase'
import { ref, get} from 'firebase/database';



export const fetchTeachers = createAsyncThunk(
  'teachers/fetchTeachers', 
  async () => {
    try {
      const dbRef = ref(database, '/');
      const data = await get(dbRef);
      console.log(data.val())
      return data.val(); 
    } catch (error) {
      console.error('Loading error', error.message);
      throw error; 
    }
  }
);
