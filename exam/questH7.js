const config = {
  mode: "active",
  maxLoad: 100,
  secure: true
}

function auditConfig(cfg) {
  const entries = []
  for (let i in config) {
    entries.push(`${i}: ${config[i]}`)
  }

  return entries
}

const report = auditConfig(config)

console.log(`Audit report: ${report.join(', ')}`)
