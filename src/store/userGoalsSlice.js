import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {setToken, retrieveToken} from '../hooks/UseLocalStorage';
import axios from 'axios';
const initialState = {
  showLoading: false,
  showError: false,
  goals: [],
  mainTaskIdToAddSubtask: '',
};
const userGoalsSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {
    setMainTaskIdToAddSubtask: (state, {payload}) => {
      state.mainTaskIdToAddSubtask = payload;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addMainTaskAsync.pending, (state, action) => {
        console.log('pending');
        state.showLoading = true;
      })
      .addCase(addMainTaskAsync.rejected, (state, action) => {
        state.showLoading = false;
      })
      .addCase(addMainTaskAsync.fulfilled, (state, action) => {
        state.showLoading = false;
        state.goals = [...state.goals, action.payload];
        console.log(action.payload, 'fulfilled');
      })
      .addCase(addSubTaskAsync.pending, (state, action) => {
        state.showLoading = false;
        console.log('pending');
      })
      .addCase(addSubTaskAsync.fulfilled, (state, action) => {
        state.showLoading = false;
        state.goals = action.payload;
        console.log(action.payload, 'fulfilled');
      })
      .addCase(addSubTaskAsync.rejected, (state, {payload}) => {
        state.showLoading = false;
        console.log(payload, 'rejected');
      })
      .addCase(getGoals.pending, (state, action) => {
        state.showLoading = true;
      })
      .addCase(getGoals.fulfilled, (state, action) => {
        state.showLoading = false;
        state.goals = action.payload;
      })
      .addCase(getGoals.rejected, (state, action) => {
        state.showLoading = false;
        console.log('rejected');
      })
      .addCase(updateMainTaskCheckBoxAsync.pending, (state, action) => {
        state.showLoading = true;
      })
      .addCase(updateMainTaskCheckBoxAsync.fulfilled, (state, action) => {
        state.showLoading = false;
        state.goals = action.payload;
      })
      .addCase(updateMainTaskCheckBoxAsync.rejected, (state, action) => {
        state.showLoading = false;
        console.log('rejected');
      })
      .addCase(updateSubtaskCheckBoxAsync.pending, (state, action) => {
        state.showLoading = true;
      })
      .addCase(updateSubtaskCheckBoxAsync.fulfilled, (state, action) => {
        state.showLoading = false;
        state.goals = action.payload;
      })
      .addCase(updateSubtaskCheckBoxAsync.rejected, (state, action) => {
        state.showLoading = false;
        console.log('rejected');
      });
  },
});
export const {setMainTaskIdToAddSubtask} = userGoalsSlice.actions;
export default userGoalsSlice.reducer;
export const addMainTaskAsync = createAsyncThunk(
  'goals/addMainTaskAsync',
  async (text, thunkAPI) => {
    const token = await retrieveToken();
    const {data} = await axios.post(
      'http://192.168.50.65:8000/api/user/goals',
      {
        mainTask: {text, checked: false},
        subTasks: [],
        token,
      },
    );

    return data;
  },
);
export const addSubTaskAsync = createAsyncThunk(
  'goals/addSubTaskAsync',
  async (text, {rejectWithValue, getState}) => {
    const state = getState().userGoalsSlice;
    const token = await retrieveToken();
    const updatedData = state.goals
      .filter((item, index) => {
        if (item._id === state.mainTaskIdToAddSubtask) {
          return item;
        }
      })
      .map(item => {
        return {
          ...item,
          subTask: [
            ...item.subTask,
            {
              text,
              checked: false,
            },
          ],
        };
      }) .map((item, index) => {
        let isAllChecked = item.subTask.every(
          (item, index) => item.checked === true,
        );
        if (isAllChecked) {
          return {...item, mainTask: {...item.mainTask, checked: true}};
        } else {
          return {...item, mainTask: {...item.mainTask, checked: false}};
        }
      });
      console.log(JSON.stringify(updatedData))
    try {
      const {data} = await axios.put(
        'http://192.168.50.65:8000/api/user/goals',
        {updatedData, token},
      );
      return data;
    } catch (err) {
      rejectWithValue(err);
    }
  },
);
export const getGoals = createAsyncThunk(
  'goals/getGoals',
  async (updatedData, thunkAPI) => {
    const token = await retrieveToken();
    const {data} = await axios.get(
      `http://192.168.50.65:8000/api/user/goals/${token}`,
    );

    return data;
  },
);
export const updateMainTaskCheckBoxAsync = createAsyncThunk(
  'goals/updateMainTaskCheckBoxAsync',
  async ({id, checked}, {rejectWithValue, getState}) => {
    console.log(checked, 'dispatchedData');
    const token = await retrieveToken();
    const state = getState().userGoalsSlice;
    const updatedData = state.goals
      .filter((item, index) => {
        if (item._id === id) {
          return item;
        }
      })
      .map(item => {
        if (checked) {
          console.log('insideeee');
          let updatedItem = item.subTask.map((item, index) => {
            return {...item, oldState: item.checked, checked: true};
          });
          console.log({
            ...item,
            subTask: [...updatedItem],
            mainTask: {...item.mainTask, checked},
          });
          return {
            ...item,
            subTask: [...updatedItem],
            mainTask: {...item.mainTask, checked},
          };
        } else {
          let updatedItem = item.subTask.map((item, index) => {
            return {...item, checked: item.oldState};
          });
          return {
            ...item,

            subTask: [...updatedItem],
            mainTask: {...item.mainTask, checked},
          };
        }
      });
    console.log(JSON.stringify(updatedData), 'updatedData');
    try {
      const {data} = await axios.put(
        'http://192.168.50.65:8000/api/user/goals',
        {updatedData, token},
      );
      return data;
    } catch (err) {
      rejectWithValue(err);
    }
  },
);
export const updateSubtaskCheckBoxAsync = createAsyncThunk(
  'goals/updateSubtaskCheckBoxAsync',
  async ({mainId, checked, subtaskIndex}, {rejectWithValue, getState}) => {
    console.log(checked, 'dispatchedData');
    const token = await retrieveToken();
    const state = getState().userGoalsSlice;

    const updatedData = state.goals
      .filter((item, index) => {
        if (item._id === mainId) {
          return item;
        }
      })

      .map(item => {
        let updatedItem = item.subTask.map((item, index) => {
          if (index == subtaskIndex) {
            return {...item, checked};
          } else {
            return item;
          }
        });
        return {...item, subTask: updatedItem};
      })
      .map((item, index) => {
        let isAllChecked = item.subTask.every(
          (item, index) => item.checked === true,
        );
        if (isAllChecked) {
          return {...item, mainTask: {...item.mainTask, checked: true}};
        } else {
          return {...item, mainTask: {...item.mainTask, checked: false}};
        }
      });
    console.log(JSON.stringify(updatedData), 'updatedData');
    try {
      const {data} = await axios.put(
        'http://192.168.50.65:8000/api/user/goals',
        {updatedData, token},
      );
      return data;
    } catch (err) {
      rejectWithValue(err);
    }
  },
);
