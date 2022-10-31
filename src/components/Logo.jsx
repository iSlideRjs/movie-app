function Logo({
    theme
}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            style={{
                width: "64px",
                "enable-background": "new 0 0 200 200"
            }}
        >
            <circle
                cx="100"
                cy="100"
                r="78.6"
                style={{
                    "fill": "#7b3d72"
                }}
            />
            <path d="M143.6 66.7c2.7 4.3 3.1 9.6 1.4 14.4-6.3 17-29.1 69.6-68.7 69.4-47.3-.2-22.9-49.3 1.1-50s43.5-35.7 46.2-37.4c2.2-1.4 13.8-6 20 3.6z" />
            <path d="M73.7 140.1s19.1.6 29-13.1" />
            <path
                d="M146.7 70.3a12 12 0 0 0-1-3.2c-.7-1.7-1.8-4.4-4.5-5.8l4-9.9-5.5-1.8-4.7 9.3c-2.5-.6-4.8.3-6.5.9-1.2.5-2.4 1.1-3.5 1.8a31.3 31.3 0 0 1-20.2 4.4c4.9 13.2 22.7 6.3 22.7 6.5-2 4.5 2 8.3 2 8.3s5.8.2 7.6-4.4c.2-.2 7.6 17.4 20.5 11.8-.3 0-8.8-7.1-10.9-17.9z"
                style={{
                    "fill": "#7b3d72",
                    "stroke": "#2b2b2b",
                    "stroke-width": "6",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": "10",
                }}
            />
        </svg>
    )
}

export { Logo }