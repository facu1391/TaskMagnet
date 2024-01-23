export const omitEntityProps = (entity, props = ["_id", "__v"]) => {
    const excludeObject = Object.entries(entity).filter(([key]) => !props.includes(key));

    return Object.fromEntries(excludeObject);
} 