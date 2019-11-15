import {
    useEffect,
    useState
} from 'react';

const useTheme = () => {
    const [theme, setTheme] = useState('dark');
    const toggleTheme = () => {
        if (theme === 'light') {
            localStorage.setItem('theme', 'dark')
            setTheme('dark')
        } else {
            localStorage.setItem('theme', 'light')
            setTheme('light')
        }
    };

    useEffect(() => {
        const localTheme = localStorage.getItem('theme');
        localTheme && setTheme(localTheme);
    }, []);

    return [theme, toggleTheme]
};


export default useTheme;