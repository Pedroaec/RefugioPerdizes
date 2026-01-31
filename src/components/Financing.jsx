import { useState } from 'react';
import { ExternalLink, Calculator, Percent, Clock, Smartphone, ArrowRightLeft, TrendingDown } from 'lucide-react';
import { financingLinks, propertyInfo } from '../data/roomPhotos';

const Financing = () => {
  const [entrada, setEntrada] = useState(20);
  const [prazo, setPrazo] = useState(360);
  const [taxa, setTaxa] = useState(10.5);

  const valorImovel = propertyInfo.price;
  const valorEntrada = (valorImovel * entrada) / 100;
  const valorFinanciado = valorImovel - valorEntrada;

  // Cálculo SAC simplificado
  const taxaMensal = taxa / 100 / 12;
  const parcela = (valorFinanciado * (taxaMensal * Math.pow(1 + taxaMensal, prazo))) /
                  (Math.pow(1 + taxaMensal, prazo) - 1);

  const formatCurrency = (value) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  const icons = {
    'Caixa Econômica': Percent,
    'Itaú': Clock,
    'Bradesco': Calculator,
    'Santander': ArrowRightLeft,
    'Creditas': Smartphone,
  };

  return (
    <section className="financing-section">
      <h2 className="section-title">Financiamento</h2>
      <p className="section-subtitle">
        Simule seu financiamento e veja quanto você pagará por mês
      </p>

      {/* Simulador de Parcelas */}
      <div className="financing-simulator">
        <div className="simulator-header">
          <Calculator size={24} />
          <h3>Simulador de Parcelas</h3>
        </div>

        <div className="simulator-controls">
          <div className="control-group">
            <label>
              Entrada: <strong>{entrada}%</strong> ({formatCurrency(valorEntrada)})
            </label>
            <input
              type="range"
              min="20"
              max="50"
              step="5"
              value={entrada}
              onChange={(e) => setEntrada(Number(e.target.value))}
              className="range-slider"
            />
            <div className="range-labels">
              <span>20%</span>
              <span>50%</span>
            </div>
          </div>

          <div className="control-group">
            <label>
              Prazo: <strong>{prazo / 12} anos</strong> ({prazo} meses)
            </label>
            <input
              type="range"
              min="120"
              max="420"
              step="60"
              value={prazo}
              onChange={(e) => setPrazo(Number(e.target.value))}
              className="range-slider"
            />
            <div className="range-labels">
              <span>10 anos</span>
              <span>35 anos</span>
            </div>
          </div>

          <div className="control-group">
            <label>
              Taxa de juros: <strong>{taxa}% a.a.</strong>
            </label>
            <input
              type="range"
              min="8"
              max="14"
              step="0.5"
              value={taxa}
              onChange={(e) => setTaxa(Number(e.target.value))}
              className="range-slider"
            />
            <div className="range-labels">
              <span>8%</span>
              <span>14%</span>
            </div>
          </div>
        </div>

        <div className="simulator-result">
          <div className="result-main">
            <span className="result-label">Parcela estimada</span>
            <span className="result-value">{formatCurrency(parcela)}<span className="result-period">/mês</span></span>
          </div>
          <div className="result-details">
            <div className="detail-item">
              <span>Valor financiado</span>
              <strong>{formatCurrency(valorFinanciado)}</strong>
            </div>
            <div className="detail-item">
              <span>Primeira parcela (SAC)</span>
              <strong>~{formatCurrency(parcela * 1.15)}</strong>
            </div>
            <div className="detail-item">
              <span>Última parcela (SAC)</span>
              <strong>~{formatCurrency(parcela * 0.4)}</strong>
            </div>
          </div>
        </div>

        <p className="simulator-note">
          <TrendingDown size={14} />
          No sistema SAC, as parcelas diminuem ao longo do tempo.
        </p>
      </div>

      {/* Banks Grid */}
      <h3 className="banks-title">Simule nos principais bancos</h3>
      <div className="financing-grid">
        {financingLinks.map((bank, index) => {
          const IconComponent = icons[bank.name] || Calculator;
          return (
            <a
              key={index}
              href={bank.url}
              target="_blank"
              rel="noopener noreferrer"
              className="financing-card"
            >
              <div className="financing-header">
                <IconComponent className="financing-icon" size={24} />
                <span className="financing-name">{bank.name}</span>
              </div>
              <p className="financing-description">{bank.description}</p>
              <div className="financing-link">
                Simular <ExternalLink size={14} />
              </div>
            </a>
          );
        })}
      </div>

      <p className="financing-disclaimer">
        * Valores aproximados para fins de planejamento. Consulte as condições específicas de cada instituição financeira.
      </p>
    </section>
  );
};

export default Financing;
