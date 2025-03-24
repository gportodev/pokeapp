import React, { useCallback } from 'react';
import styles from './styles';

import { View, Text } from 'react-native';
import { ProgressBar } from '@/components/ProgressBar';
import { PokemonStat } from '@/dtos/PokemonStatDTO';

type StatsProps = {
  stats: PokemonStat[];
};

function Stats({ stats }: StatsProps): JSX.Element {
  const renderColumnItem = useCallback(
    (label: string, value: number, columnIndex: number) => {
      switch (columnIndex) {
        case 0:
          return (
            <Text key={label} style={styles.statLabel}>
              {label}
            </Text>
          );
        case 1:
          return (
            <Text key={label} style={styles.statLabel}>
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
    [],
  );

  const renderColumns = useCallback(() => {
    const statsData = stats.map(stat => ({
      label: stat.stat.name,
      value: stat.base_stat,
    }));

    const totalLabel = 'Total';
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
  }, [stats, renderColumnItem]);

  return (
    <View style={styles.thirdBlockInfoContainer}>
      <Text style={styles.title}>Stats</Text>

      {renderColumns()}
    </View>
  );
}

export { Stats };
