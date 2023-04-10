function UniqueId() {
    let id = parseInt(Math.random() * 100);
    return () => {
        return id++
    };
}

export default UniqueId;