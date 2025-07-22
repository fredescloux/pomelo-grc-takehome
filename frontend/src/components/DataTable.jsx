//console.log('Entries received:', entries);
const DataTable = ({ entries }) => (
  <table>
    <thead>
      <tr>
        <th>Text</th>
        <th>Timestamp</th>
      </tr>
    </thead>
    <tbody>
      {entries.map((row, idx) => {
        console.log('Rendering row:', row);
        return (
          <tr
            key={idx}
            style={{
              backgroundColor: row.isJwtValid ? '#fecaca' : 'white',
              color: row.isJwtValid ? 'black' : 'black',
            }}
          >
            <td>{row.text}</td>
            <td>{row.timestamp}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

export default DataTable;