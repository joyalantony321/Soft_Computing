import React from 'react';
import { Heart, Brain, Database, Code, ExternalLink, FileText, Laptop, Mail, Phone, User, GraduationCap } from 'lucide-react';

function App() {
  const researchLinks = [
    {
      title: "The Role of Artificial Intelligence in Early Diagnosis and Management of Cardiovascular Diseases",
      description: "Comprehensive study on artificial intelligence applications in early cardiac risk prediction and diagnostic accuracy improvements.",
      url: "http://induspublishers.com/IJBR/article/view/667",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Early Diagnosis of Cardiovascular Diseases in the Era of Artificial Intelligence: An In-Depth Review",
      description: "Review article exploring machine learning methodologies and their clinical applications in cardiovascular diagnostics.",
      url: "https://assets.cureus.com/uploads/review_article/pdf/236353/20240409-16846-srvwlp.pdf",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "AI-Driven Early Detection of Cardiovascular Diseases: Reducing Healthcare Costs and improving patient Outcomes",
      description: "Latest research on deep learning approaches for automated cardiac assessment and early detection systems.",
      url: "https://arxiv.org/abs/2506.08229",
      icon: <FileText className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionizing Cardiac Care with
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block mt-2">
              Artificial Intelligence
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Advancing early cardiac diagnostic capabilities through cutting-edge AI technologies. 
            Explore our comprehensive research, datasets, and machine learning models designed to 
            improve cardiovascular health outcomes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Active Research Project</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200">
              <Database className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Open Dataset Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Research Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Research References</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore the foundational research papers that inform our AI-driven approach to early cardiac diagnostics
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {researchLinks.map((paper, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                        {paper.icon}
                      </div>
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors duration-300 leading-tight">
                      {paper.title}
                    </h4>
                    <p className="text-gray-600 mb-4 leading-relaxed flex-grow text-sm">
                      {paper.description}
                    </p>
                    <a
                      href={paper.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300 mt-auto"
                    >
                      <span>Read Paper</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resources Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Project Resources</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Access our curated dataset and interactive model training environment
              </p>
            </div>
<div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">

              {/* Dataset Card */}
              <div className="group max-w-[22rem] w-full">

                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-teal-200">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                      <Database className="w-8 h-8" />
                    </div>
                    <ExternalLink className="w-6 h-6 text-gray-400 group-hover:text-teal-600 transition-colors duration-300" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-800 transition-colors duration-300">
                    Documentation
                  </h4>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Documentation offers structured details about a project’s purpose, setup, usage, and maintenance, guiding users and developers for better understanding, collaboration, and long-term project success.
                  </p>
                  <a
                    href="https://docs.google.com/document/d/1Km5qL0896v0lkmIMMeN46KjouRbUhZllUojOMjwsIUs/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-medium hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <span>Access Doc</span>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Model Training Card */}
              <div className="group max-w-[22rem] w-full">

                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-purple-200">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                      <Laptop className="w-8 h-8" />
                    </div>
                    <ExternalLink className="w-6 h-6 text-gray-400 group-hover:text-purple-600 transition-colors duration-300" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-800 transition-colors duration-300">
                    Cardiac Dataset
                  </h4>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Comprehensive cardiac diagnostic dataset featuring ECG readings, patient demographics, 
                    and clinical outcomes. Carefully curated and anonymized for research purposes with 
                    standardized formatting for machine learning applications.
                  </p>
                  <a
                    href="https://docs.google.com/spreadsheets/d/1sUxrtA0g3VlvnTgJglCLHU2Niwl4nSxTcbiWbyQ5ABs/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-medium hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <span>Access Dataset</span>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Model Training Card */}
              <div className="group max-w-[22rem] w-full">

                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-purple-200">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                      <Laptop className="w-8 h-8" />
                    </div>
                    <ExternalLink className="w-6 h-6 text-gray-400 group-hover:text-purple-600 transition-colors duration-300" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-800 transition-colors duration-300">
                    Model Training
                  </h4>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Interactive Jupyter notebook environment for training and evaluating cardiac diagnostic models. 
                    Includes pre-configured machine learning pipelines, data preprocessing scripts, 
                    and performance evaluation metrics.
                  </p>
                  <a
                    href="https://colab.research.google.com/drive/1ubN30E-zkyKdtzNNF4LywcXcSX-kXJoq?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <span>Open Colab</span>
                    <Code className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get in touch with our research team for collaboration opportunities and inquiries
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Team Members */}
                  <div className="space-y-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <User className="w-6 h-6 text-blue-600 mr-2" />
                      Team Members
                    </h4>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-xl">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                          JJ
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">JOWIN JOSHI</p>
                          <p className="text-sm text-gray-600">Student ID: 2262088</p>
                          <a href="mailto:jowinjoshikk@gmail.com" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                            jowinjoshikk@gmail.com
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-xl">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                          JA
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">JOYAL ANTONY</p>
                          <p className="text-sm text-gray-600">Student ID: 2262089</p>
                          <a href="mailto:joyalantony321@gmail.com" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                            joyalantony321@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Mail className="w-6 h-6 text-blue-600 mr-2" />
                      Contact Information
                    </h4>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
                        <GraduationCap className="w-6 h-6 text-blue-600" />
                        <div>
                          <p className="font-semibold text-gray-900">Institution</p>
                          <p className="text-gray-600">CHRIST (Deemed to be University)</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
                        <Phone className="w-6 h-6 text-green-600" />
                        <div>
                          <p className="font-semibold text-gray-900">Phone</p>
                          <a href="tel:+919656814553" className="text-green-600 hover:text-green-800 transition-colors">
                            +91 9656814553
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-blue-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600 mb-2">
              Cardiac Diagnostics Research Project
            </p>
            <p className="text-sm text-gray-500">
              Advancing healthcare through artificial intelligence and machine learning
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;