// tailwind.config.js
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#2563eb', // 默认简约风主色
                secondary: '#475569',
                light: '#f8fafc',
                // 新增多样式备用主色，供style-multiple.css调用
                blue: {
                    400: '#60a5fa',
                    500: '#3b82f6',
                    600: '#2563eb',
                },
                amber: {
                    50: '#fffbeb',
                    100: '#fef3c7',
                    600: '#d97706',
                    700: '#b45309',
                    800: '#92400e',
                },
                gray: {
                    50: '#f9fafb',
                    100: '#f3f4f6',
                    200: '#e5e7eb',
                    300: '#d1d5db',
                    600: '#4b5563',
                    700: '#374151',
                    800: '#1f2937',
                    900: '#111827',
                    950: '#030712',
                },
                // 新增：森系风颜色
                green: {
                    50: '#f0fdf4',
                    100: '#dcfce7',
                    200: '#bbf7d0',
                    400: '#4ade80',
                    500: '#22c55e',
                    600: '#16a34a',
                    700: '#15803d',
                },
                // 新增：ins风颜色
                purple: {
                    50: '#faf5ff',
                    100: '#f3e8ff',
                    200: '#e9d5ff',
                    500: '#a855f7',
                    600: '#9333ea',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        }
    }
}