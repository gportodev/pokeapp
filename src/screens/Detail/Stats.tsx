import React, { useCallback } from 'react';
import styles from './styles';

import { View, Text } from 'react-native';
import { ProgressBar } from '@/components/ProgressBar';
import { PokemonStat } from '@/dtos/PokemonStatDTO';
import { Translate } from './Detail';
import { getStatTranslation } from '@/common/utils/stats';

type StatsProps = Translate & {
  stats: PokemonStat[];
  themeMode: string;
};

function Stats({ stats, themeMode, translate }: StatsProps): JSX.Element {
  const renderColumnItem = useCallback(
    (label: string, value: number, columnIndex: number) => {
      switch (columnIndex) {
        case 0:
          return (
            <Text
              key={label}
              style={[
                styles.statLabel,
                {
                  color: themeMode,
                },
              ]}
            >
              {translate(getStatTranslation(label))}
            </Text>
          );
        case 1:
          return (
            <Text
              key={label}
              style={[
                styles.statLabel,
                {
                  color: themeMode,
                },
              ]}
            >
              {value}
            </Text>
          );
        case 2:
          return (
            <View
              key={label}
              style={{
                width: 200,
                height: 17,
                justifyContent: 'center',
              }}
            >
              <ProgressBar progress={value} />
            </View>
          );
        default:
          return null;
      }
    },
    [themeMode, translate],
  );

  const renderColumns = useCallback(() => {
    const statsData = stats.map(stat => ({
      label: stat.stat.name,
      value: stat.base_stat,
    }));

    const totalLabel = translate('detail.stats.list.total');
    const totalValue = stats.reduce((sum, item) => sum + item.base_stat, 0);

    statsData.push({
      label: totalLabel,
      value: totalValue,
    });

    return (
      <View style={styles.statInfo}>
        {[0, 1, 2].map(columnIndex => (
          <View key={columnIndex} style={styles.statColumn}>
            {statsData.map(({ label, value }) =>
              renderColumnItem(label, value, columnIndex),
            )}
          </View>
        ))}
      </View>
    );
  }, [stats, translate, renderColumnItem]);

  return (
    <View style={styles.thirdBlockInfoContainer}>
      <Text
        style={[
          styles.title,
          {
            color: themeMode,
          },
        ]}
      >
        {translate('detail.stats.title')}
      </Text>

      {renderColumns()}
    </View>
  );
}

export { Stats };
