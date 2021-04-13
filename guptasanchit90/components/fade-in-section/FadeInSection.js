import React from 'react';
import styles from './FadeInSection.module.css';

const FadeInSection = (props) => {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
        // Run Every time
        // const observer = new IntersectionObserver(entries => {
        //     entries.forEach(entry => setVisible(entry.isIntersecting));
        // });

        // Run Once
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(entry.isIntersecting);
                }
            });
        });
        observer.observe(domRef.current);
        const ref = domRef.current;
        return () => observer.unobserve(ref);
    }, []);

    const getTransition = () =>{
        if(props.side === 'bottom'){
            return 'translateY(10vh)'
        }

        if(props.side === 'top'){
            return 'translateY(-10vh)'
        }

        if(props.side === 'left'){
            return 'translateX(-10vw)'
        }
        if(props.side === 'right'){
            return 'translateX(10vw)'
        }
    }
    const {style} = props;
    return (
        <div
            style={{transform : isVisible ? 'none' :  getTransition(), ...style }}
            className={[styles.section, `${isVisible ? styles.sectionVisible : ''}`].join(" ")}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}

export default FadeInSection;