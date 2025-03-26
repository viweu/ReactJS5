import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const Theme = () => {
    const theme = useSelector(state => state);
    const dispatch = useDispatch();

    const   toggleTheme = () => {
        dispatch({ type: 'TOGGLE_THEME'})
    };

    return (
        
        <div className='content' style={{color: theme ? 'white' : 'black', background: theme ? 'black' : 'white'}}>
            <h1>Приложение для переключения темы сайта</h1>
            <p>Создать приложение, позволяющее пользователю переключать между светлой и темной темой сайта.</p>
            <h2>Функционал:</h2>
            <p>Action types: TOGGLE_THEME.
            Actions: Создайте действие для переключения темы.
            Reducer: Реализуйте редьюсер, который обрабатывает это действие и изменяет тему в состоянии приложения.
            Component: Создайте компонент, который отображает переключатель для изменения темы сайта.</p>
            <FormControlLabel control={<Switch  onChange={toggleTheme}  />} label="Сменить тему" />
            
        </div>
    )
};

export default Theme;
