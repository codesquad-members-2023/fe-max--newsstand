const setStore = async () => {
  const response = await fetch("http://localhost:8080/rolling");
  const rollingData = await response.json();

  const store = {
    right: {
      data: rollingData.slice(0, rollingData.length / 2),
      state: "move",
      currentIndex: 0,
    },
    left: {
      data: rollingData.slice(rollingData.length / 2),
      state: "move",
      currentIndex: 0,
    },
  };

  return store;
};

const store = await setStore();

export default store;

