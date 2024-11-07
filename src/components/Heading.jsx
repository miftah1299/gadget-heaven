import PropTypes from "prop-types";

const Heading = ({
    title,
    subtitle,
    className,
    titleClassName,
    subtitleClassName,
}) => {
    return (
        <div
            className={`heading ${className} flex flex-col gap-6 text-white text-center py-8`}
        >
            <h1
                className={`heading-title ${titleClassName} text-2xl lg:text-3xl font-bold`}
            >
                {title}
            </h1>
            <p
                className={`heading-subtitle ${subtitleClassName} text-xs md:text-base`}
            >
                {subtitle}
            </p>
        </div>
    );
};

Heading.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    className: PropTypes.string,
    titleClassName: PropTypes.string,
    subtitleClassName: PropTypes.string,
};

export default Heading;
