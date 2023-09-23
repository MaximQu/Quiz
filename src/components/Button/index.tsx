import { twMerge } from 'tailwind-merge';

type ButtonProps = {
    innerText: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
    type = 'button',
    className,
    innerText,
    ...buttonProps
}) => {
    return (
        <button
            type={type}
            className={twMerge(
                'min-w-fit sm:w-[200px] rounded-lg dark:bg-white bg-primary p-3 text-center text-sm font-medium text-white outline-transparent transition-colors btn cube cube-hover',
                className,
            )}
            {...buttonProps}
        >
            <div className="bg-top">
                <div className="bg-inner"></div>
            </div>
            <div className="bg-right">
                <div className="bg-inner"></div>
            </div>
            <div className="bg">
                <div className="bg-inner"></div>
            </div>
            <div className="text">{innerText}</div>
        </button>
    );
};

export default Button;
