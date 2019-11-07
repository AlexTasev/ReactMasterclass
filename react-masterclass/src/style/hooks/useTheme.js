// import {
//     useEffect,
//     useState
// } from 'react';

// const useTheme = () => {
//     const LIGHT_THEME = 'light';
//     const DARK_THEME = 'dark';

//     const [theme, setTheme] = useState(LIGHT_THEME);
//     const [componenDidtMount, setComponentDidMount] = useState(false);

//     const setMode = mode => {
//         localStorage.setItem('theme', mode);
//         setTheme(mode);
//     };

//     const toggleTheme = () =>
//         theme === LIGHT_THEME ? setMode(DARK_THEME) : setMode(LIGHT_THEME);

//     useEffect(() => {
//         const localTheme = window.localStorage.getItem('theme');
//         window.matchMedia &&
//             window.matchMedia('(prefers-color-scheme: dark)').matches &&
//             !localTheme ?
//             setMode(DARK_THEME):
//             localTheme ?
//             setTheme(localTheme) :
//             setMode(LIGHT_THEME);

//         setComponentDidMount(true);
//     }, []);
// };

// export default useTheme;