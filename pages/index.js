export default function Home() {
  return (
    <div style={styles.container}>
      <main style={styles.main}>
        <h1 style={styles.title}>EvoGit</h1>
        <p style={styles.description}>Decentralized Code Evolution</p>
        <div style={styles.grid}>
          <div style={styles.card}>
            <h2>🤖 Autonomous</h2>
            <p>AI agents continuously review and improve the codebase</p>
          </div>
          <div style={styles.card}>
            <h2>🔄 Recursive</h2>
            <p>Uses RLM patterns: peek, grep, partition, recurse</p>
          </div>
          <div style={styles.card}>
            <h2>🛡️ Safe</h2>
            <p>Strict guardrails prevent breaking changes</p>
          </div>
          <div style={styles.card}>
            <h2>📊 Quality</h2>
            <p>Integrated automated code review and testing</p>
          </div>
        </div>
      </main>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    padding: '0 0.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f0f0f',
    color: '#fff',
  },
  main: {
    padding: '5rem 0',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '1200px',
  },
  title: {
    margin: 0,
    lineHeight: 1.15,
    fontSize: '4rem',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  description: {
    textAlign: 'center',
    lineHeight: 1.5,
    fontSize: '1.5rem',
    marginTop: '1rem',
    color: '#888',
  },
  grid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    maxWidth: '1000px',
    marginTop: '3rem',
    gap: '1rem',
  },
  card: {
    margin: '1rem',
    padding: '1.5rem',
    textAlign: 'left',
    color: '#fff',
    textDecoration: 'none',
    border: '1px solid #333',
    borderRadius: '10px',
    transition: 'color 0.15s ease, border-color 0.15s ease',
    maxWidth: '300px',
    backgroundColor: '#1a1a1a',
  },
}