

const DroneQuizSection = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '30px',
        backgroundColor: '#f8f8f8',
        borderRadius: '8px',
        width:"80%",
        height:"80vh",
        margin:"0% 8%"
      }}
    >
      <div style={{ flex: 1 }}>
        <h2 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '16px' }}>
          Want to choose your perfect drone?
        </h2>
        <p style={{ fontSize: '16px', marginBottom: '24px', color: '#333' }}>
          Take a quick quiz to find your perfect drone match.
        </p>
        <button
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#0078D4',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Take a quiz
        </button>
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <img
          src="https://www-cdn.djiits.com/dps/c202f7d4e20407d8fadaeec761ff194d.jpg"
          alt="Drone"
          style={{ maxWidth: '100%', borderRadius: '8px' }}
        />
      </div>
    </div>
  );
};

export default DroneQuizSection;
