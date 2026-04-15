'use client'

import { useState } from 'react'

export default function Home() {
  const [product, setProduct] = useState('')
  const [company, setCompany] = useState('')
  const [questions, setQuestions] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  const products = [
    'Ivanti Neurons for Application Security Posture Management',
    'Ivanti Neurons for EASM',
    'Ivanti Neurons for Patch Management',
    'Ivanti Neurons for Risk-Based Vulnerability Management',
    'Ivanti Neurons for Vulnerability Knowledge Base',
    'Ivanti Neurons Patch for Intune',
    'Ivanti Patch for Configuration Manager',
    'Ivanti Patch for Endpoint Manager',
    'Ivanti Secure Connectivity',
    'Ivanti Connect Secure (VPN)',
    'Ivanti NAC',
    'Ivanti Neurons for Secure Access',
    'Ivanti Neurons for Zero Trust Access',
    'Ivanti Secure Access Client',
    'Ivanti Virtual Application Delivery Controller (vADC)',
    'Ivanti Zero Sign-On',
    'Ivanti AppConnect and AppTunnel',
    'Ivanti Application Control',
    'Ivanti AppStation',
    'Ivanti Device Control',
    'Ivanti Docs@Work for iOS',
    'Ivanti Email Plus',
    'Ivanti Endpoint Manager',
    'Ivanti Endpoint Manager Mobile',
    'Ivanti Endpoint Security for Endpoint Manager',
    'Ivanti Environment Manager',
    'Ivanti Environment Manager Policy',
    'Ivanti File Director',
    'Ivanti Help@Work',
    'Ivanti Automation',
    'Ivanti Neurons Digital Assistant',
    'Ivanti Neurons for Discovery',
    'Ivanti Neurons for Facilities',
    'Ivanti Neurons for GRC',
    'Ivanti Neurons for HR',
    'Ivanti Neurons for ITAM',
    'Ivanti Neurons for ITSM',
    'Ivanti Neurons for PPM',
    'Ivanti Neurons for Security Operations Management',
    'Ivanti Neurons for Service Mapping',
    'Ivanti Browser Solutions',
    'Ivanti Neurons for IIOT',
    'Ivanti Terminal Emulation',
    'Ivanti Velocity',
    'Ivanti Velocity Voice'
  ]



  const getCategory = (prod: string): string => {
    if (prod.includes('Patch') || prod.includes('Vulnerability') || prod.includes('Security Posture') || prod.includes('EASM') || prod.includes('Secure Connectivity')) return 'Exposure Management'
    if (prod.includes('VPN') || prod.includes('NAC') || prod.includes('Secure Access') || prod.includes('Zero Trust') || prod.includes('Access Client') || prod.includes('vADC') || prod.includes('Sign-On')) return 'Network Security'
    if (prod.includes('Endpoint Manager') || prod.includes('Application Control') || prod.includes('Device Control') || prod.includes('Environment Manager') || prod.includes('AppStation') || prod.includes('File Director') || prod.includes('Help@Work')) return 'Autonomous Endpoint Management'
    if (prod.includes('ITSM') || prod.includes('ITAM') || prod.includes('Discovery') || prod.includes('Facilities') || prod.includes('GRC') || prod.includes('HR') || prod.includes('PPM') || prod.includes('Security Operations') || prod.includes('Service Mapping') || prod.includes('Digital Assistant') || prod.includes('Automation')) return 'IT Service Management'
    if (prod.includes('Browser') || prod.includes('Terminal') || prod.includes('Velocity') || prod.includes('IIOT')) return 'Supply Chain'
    return 'General'
  }

  const generateQuestions = (prod: string, comp: string, ind: string): string[] => {
    const category = getCategory(prod)
    const questionSets: { [key: string]: string[] } = {
      'Exposure Management': [
        `How is ${comp} currently identifying and prioritizing vulnerabilities across ${comp}'s attack surface?`,
        `What happens if a zero-day vulnerability exploits ${comp}'s systems before patches are applied?`,
        `How does ${comp} measure the effectiveness of ${comp}'s patch management strategy with ${prod}?`,
        `Which security teams at ${comp} are overwhelmed by the volume of vulnerability alerts from ${prod}?`,
        `What would it mean for ${comp} to automate vulnerability remediation from weeks to days using ${prod}?`,
        `How does ${comp} correlate external attack surface data with internal vulnerabilities in ${prod}?`,
        `What financial risk does ${comp} face from non-compliant endpoints or delayed patching?`,
        `Can ${comp} demonstrate ROI on security investments through reduced breach incidents with ${prod}?`,
        `How much manual effort does ${comp} dedicate to vulnerability scanning versus automated processes?`,
        `If ${comp} could eliminate blind spots in ${comp}'s exposure management, what new opportunities would that create?`
      ],
      'Network Security': [
        `How is ${comp} securing remote access for ${comp}'s distributed workforce?`,
        `What happens if unauthorized devices gain access to ${comp}'s network through ${prod}?`,
        `How confident is ${comp} in ${comp}'s zero-trust implementation across all access points?`,
        `Which IT teams at ${comp} struggle with managing VPN and NAC policies in ${prod}?`,
        `What would it mean for ${comp} to enable seamless, secure connectivity without compromising performance?`,
        `How does ${comp} monitor and respond to network threats in real-time with ${prod}?`,
        `What compliance risks does ${comp} face from inadequate network segmentation?`,
        `Is ${comp} able to scale secure access as ${comp}'s remote workforce grows?`,
        `How much time does ${comp} spend on manual network policy updates versus automated enforcement?`,
        `If ${comp} could eliminate network-based breaches entirely, what business outcomes would improve?`
      ],
      'Autonomous Endpoint Management': [
        `How is ${comp} managing device compliance across ${comp}'s diverse endpoint ecosystem?`,
        `What happens if a compromised endpoint spreads malware throughout ${comp}'s network?`,
        `How does ${comp} ensure consistent application delivery and security on all managed devices?`,
        `Which helpdesk teams at ${comp} are bogged down by endpoint configuration issues?`,
        `What would it mean for ${comp} to achieve true endpoint autonomy with ${prod}?`,
        `How does ${comp} correlate endpoint data with user productivity metrics?`,
        `What productivity losses does ${comp} experience from endpoint downtime or misconfigurations?`,
        `Can ${comp} prove reduced support costs through automated endpoint management?`,
        `How much manual intervention does ${comp} require for routine endpoint tasks?`,
        `If ${comp} could unify all endpoint management under one platform, what efficiencies would that unlock?`
      ],
      'IT Service Management': [
        `How is ${comp} tracking and resolving IT service requests across ${comp}'s organization?`,
        `What happens when critical IT services fail and impact ${comp}'s business operations?`,
        `How does ${comp} measure IT service quality and user satisfaction with ${prod}?`,
        `Which service desk teams at ${comp} are overwhelmed by incident volume?`,
        `What would it mean for ${comp} to predict and prevent service disruptions proactively?`,
        `How does ${comp} integrate ITSM data with broader business intelligence?`,
        `What costs does ${comp} incur from inefficient service management processes?`,
        `Is ${comp} able to demonstrate improved MTTR through ${prod} automation?`,
        `How much manual effort does ${comp} put into service request fulfillment?`,
        `If ${comp} could transform IT from a cost center to a strategic enabler, what would change?`
      ],
      'Supply Chain': [
        `How is ${comp} managing legacy systems and terminal-based applications?`,
        `What happens if supply chain disruptions affect ${comp}'s critical business processes?`,
        `How does ${comp} ensure secure and efficient browser-based workflows?`,
        `Which operations teams at ${comp} struggle with outdated terminal emulation?`,
        `What would it mean for ${comp} to modernize ${comp}'s supply chain technology stack?`,
        `How does ${comp} monitor IIoT devices for security and performance?`,
        `What risks does ${comp} face from unsupported or end-of-life systems?`,
        `Can ${comp} prove productivity gains from modernized supply chain tools?`,
        `How much time does ${comp} waste on manual supply chain data entry?`,
        `If ${comp} could eliminate supply chain bottlenecks entirely, what growth would that enable?`
      ],
      'General': [
        `How is ${comp} currently managing security gaps across ${comp}'s endpoints for ${prod}?`,
        `What happens if a critical configuration drift goes undetected in ${comp}'s ${prod} environment?`,
        `How confident is ${comp} in measuring patch compliance across ${comp}'s hybrid workforce using ${prod}?`,
        `Which teams at ${comp} are most frustrated by the speed of incident response related to ${prod}?`,
        `What would it mean for ${comp} to reduce remediation time from days to hours with ${prod}?`,
        `How does ${comp} currently correlate endpoint issues to broader IT operations?`,
        `What risk does ${comp} see from unmanaged devices or long-patch windows affecting ${prod}?`,
        `Is ${comp} able to prove service-level improvement after an endpoint change in ${prod}?`,
        `How much effort does ${comp} spend on manual remediation versus automated action for ${prod}?`,
        `If ${comp} could improve security posture and productivity simultaneously, what would that enable?`
      ]
    }
    const baseQuestions = questionSets[category] || questionSets['General']
    const industryQuestions: { [key: string]: string[] } = {
      Healthcare: [
        `How does ${comp} ensure HIPAA compliance when managing patient data across endpoints?`,
        `What happens if a ransomware attack disrupts ${comp}'s electronic health records?`,
        `How confident is ${comp} in protecting PHI during remote access for healthcare workers?`
      ],
      Finance: [
        `How does ${comp} comply with PCI DSS requirements for endpoint security?`,
        `What financial losses has ${comp} experienced from cyber fraud or data breaches?`,
        `How does ${comp} secure trading platforms and sensitive financial data?`
      ],
      Education: [
        `How does ${comp} protect student data privacy under FERPA regulations?`,
        `What happens if a cyber incident affects ${comp}'s online learning platforms?`,
        `How does ${comp} manage endpoint security across campus networks and devices?`
      ],
      Retail: [
        `How does ${comp} secure customer payment data at POS terminals?`,
        `What impact do data breaches have on ${comp}'s customer trust and sales?`,
        `How does ${comp} manage inventory and supply chain security?`
      ],
      Manufacturing: [
        `How does ${comp} secure industrial control systems and OT networks?`,
        `What happens if a cyber attack halts ${comp}'s production lines?`,
        `How does ${comp} protect intellectual property in design and manufacturing data?`
      ]
    }
    const extra = industryQuestions[ind] || []
    return [...baseQuestions, ...extra]
  }

  const handleGenerate = async () => {
    if (product && company) {
      setLoading(true)
      setQuestions(generateQuestions(product, company, 'General'))
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-14 sm:px-6 lg:px-8 flex items-start justify-center">
      <div className="w-full max-w-[600px]">
        <header className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Ivanti Challenger</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight text-slate-950">
            Discovery Questions
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-lg leading-8 text-slate-600">
            Generate tailored discovery questions quickly for any Ivanti product and customer.
          </p>
        </header>

        <div className="mx-auto rounded-[32px] border border-slate-200 bg-white shadow-lg shadow-slate-200/30">
          <div className="h-[400px] w-full px-6 py-8 sm:px-8">
            <div className="flex h-full flex-col justify-between">
              <div className="space-y-8">
                <div>
                  <label htmlFor="product" className="block text-sm font-semibold text-slate-800">Ivanti Product</label>
                  <select
                    id="product"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    className="mt-3 w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 text-lg text-slate-900 shadow-sm outline-none transition focus:border-black focus:ring-2 focus:ring-slate-200"
                  >
                    <option value="">Select a product</option>
                    {products.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-slate-800">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Enter company name"
                    className="mt-3 w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 text-lg text-slate-900 shadow-sm outline-none transition focus:border-black focus:ring-2 focus:ring-slate-200"
                  />
                </div>
              </div>

              <button
                onClick={handleGenerate}
                disabled={loading || !product || !company}
                className="mt-6 mx-auto flex h-16 w-full max-w-[420px] items-center justify-center rounded-2xl bg-red-600 px-6 text-xl font-semibold text-white shadow-xl shadow-red-600/20 transition hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-200 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500"
              >
                {loading ? 'Generating questions...' : 'Generate Questions'}
              </button>
            </div>
          </div>
        </div>

        {questions.length > 0 && (
          <section className="mt-[50px] rounded-[28px] border-2 border-red-400 bg-red-50 px-6 py-7 shadow-inner shadow-red-100/50">
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-semibold text-slate-950">Generated Questions for {company}</h2>
              <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-slate-700">Use these prompts for stronger discovery conversations.</p>
            </div>
            <ol className="space-y-4 pl-5 text-slate-800">
              {questions.map((q, i) => (
                <li key={i} className="rounded-2xl border border-red-200 bg-white px-5 py-4 text-lg leading-8">
                  {q}
                </li>
              ))}
            </ol>
          </section>
        )}
      </div>
    </div>
  )
}
