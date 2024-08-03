import React, { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
    return (
        <div className={`max-w-[1000px] h-screen mx-auto flex justify-center items-center text-center ${className}`}>
            {children}
        </div>
    );
};

export default Container;
