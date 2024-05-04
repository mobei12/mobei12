import { useRef, useEffect } from 'react';
export default ({ color = 'black' }) => {
    const ref = useRef(null)
    useEffect(() => {
        const div = ref.current;
        const observer = new IntersectionObserver(entries => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                div.style.backgroundColor = color;
                div.innerHTML = `完全展示，显示背景色为${color}`;
            } else {
                div.style.backgroundColor = 'skyblue';
                div.innerHTML = '未完全展示，显示背景色为skyblue';
            }
        }, {
            threshold: 1.0
        });
        observer.observe(div);
        return () => {
            observer.disconnect();
        }
    }, []);
    return (
        <div ref={ref} style={{
            height: "200%",
            width: "100%",
            border: '2px solid black',
            textAlign: 'center',
            lineHeight: '200px',
            backgroundColor: color
        }} > 块容器</div>
    )
}