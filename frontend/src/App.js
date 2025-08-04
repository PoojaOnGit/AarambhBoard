import DashboardGrid from './components/DashboardGrid';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <br /><br />

      <input
        type="text"
        placeholder="Type your name"
        onChange={(e) => setName(e.target.value)}
      />
      <h2>{name ? 'Hello,${name}! ': 'Please enter your name.'}</h2>
    </div>
  );
}