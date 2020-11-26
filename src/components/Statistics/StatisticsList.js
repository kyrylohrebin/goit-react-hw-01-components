const StatisticsList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <span>{item.label}</span>
          <span>{`${item.percentage}%`}</span>
        </li>
      ))}
    </ul>
  );
};

export default StatisticsList;
