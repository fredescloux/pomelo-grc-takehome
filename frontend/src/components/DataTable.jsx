const DataTable = ({ entries }) => (
  <table>
    <thead>
      <tr>
        <th>Text</th>
        <th>Timestamp</th>
      </tr>
    </thead>
    <tbody>
      {entries.map((row, idx) => (
        <tr key={idx} style={{ backgroundColor: row.isJwtValid ? 'red' : 'white' }}>
          <td>{row.text}</td>
          <td>{row.timestamp}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default DataTable;