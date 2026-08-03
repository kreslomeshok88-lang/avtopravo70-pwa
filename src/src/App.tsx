function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#f5f5f5",
        minHeight: "100vh",
        padding: "20px"
      }}
    >
      <div
        style={{
          maxWidth: "420px",
          margin: "0 auto"
        }}
      >
        <h1
          style={{
            color: "#c1121f",
            textAlign: "center"
          }}
        >
          АвтоПраво70
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#555"
          }}
        >
          Автоюрист по ДТП и страховым спорам
        </p>

        <button
          style={{
            width: "100%",
            padding: "16px",
            marginTop: "20px",
            background: "#c1121f",
            color: "#fff",
            border: "none",
            borderRadius: "12px",
            fontSize: "18px",
            cursor: "pointer"
          }}
        >
          Получить консультацию
        </button>

        <div style={{ marginTop: "30px" }}>
          {[
            "🚗 Взыскание выплат по ОСАГО",
            "🚙 Взыскание выплат по КАСКО",
            "💰 Если страховая не доплатила",
            "🔍 Независимая экспертиза",
            "📉 Взыскание УТС",
            "⚖ Представительство в суде",
            "🚔 Взыскание ущерба",
            "📞 Юридическое сопровождение"
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "#fff",
                padding: "18px",
                marginBottom: "12px",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,.08)"
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
