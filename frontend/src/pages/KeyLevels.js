import React from 'react';
import { useTranslation } from 'react-i18next';

const KeyLevels = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{t('keyLevels')}</h1>
      <div className="card p-6">
        <p className="text-gray-400">Key Levels page content will be shown here.</p>
      </div>
    </div>
  );
};

export default KeyLevels;