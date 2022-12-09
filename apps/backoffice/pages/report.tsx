/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Button, TextField } from '@mui/material';
import { DataGrid, GridColDef, GridToolbarExport } from '@mui/x-data-grid';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import api from '../lib/api/airlabs.api';
import { useListDangerZones } from '../lib/api/zones/zones.query';
import PageHeader from '../lib/components/header/PageHeader';
import MonthSelect, { MonthSelectProps } from '../lib/views/employees/MonthSelect';

const BONUS_REPORTS_COLUMN: GridColDef[] = [
  {
    field: 'emp_no',
  },
  {
    field: 'bonus',
  },
  {
    field: 'id',
  },
];

const useRunBonusReport = ({ month }: { month: number }) => {
  const fetchBonusReport = async () => (await api.reports.runReport({ month })).data;

  const bonusReportQuery = useQuery({ queryFn: fetchBonusReport, queryKey: ['bonus', month] });

  return bonusReportQuery;
};

const Report = () => {
  const [viewingMonth, setViewingMonth] = useState<number>(9);
  const [filteredBonusDays, setFilteredBonusDays] = useState([]);
  const [filterEmpNo, setFilterEmpNp] = useState('');

  const bonusReportQuery = useRunBonusReport({ month: viewingMonth });

  const handleChangeEvent: MonthSelectProps['onChange'] = (params) => {
    setViewingMonth(params.value);
  };

  useEffect(() => {
    if (!bonusReportQuery.data || !filterEmpNo) return;

    setFilteredBonusDays(
      bonusReportQuery.data.filter((report) =>
        report.emp_no.toLowerCase().startsWith(filterEmpNo.toLowerCase())
      )
    );
  }, [filterEmpNo, bonusReportQuery.data]);

  return (
    <>
      <PageHeader
        title="Bonus Report"
        breadcrumbLinks={[{ name: 'Home', href: '/' }, { name: 'Bonus Report' }]}
      />

      <main>
        <MonthSelect onChange={handleChangeEvent} month={viewingMonth} key="month" />

        <TextField
          placeholder="Search by code..."
          label="Code"
          variant="outlined"
          onChange={(e) => setFilterEmpNp(e.target.value)}
        />
        <div className="data-grid-wrap">
          <DataGrid
            rows={filterEmpNo ? filteredBonusDays : bonusReportQuery?.data || []}
            columns={BONUS_REPORTS_COLUMN}
            loading={bonusReportQuery.isLoading}
            density="compact"
            initialState={{ columns: { columnVisibilityModel: { id: false } } }}
            components={{
              Toolbar: ExportToolbar,
            }}
          />
        </div>
      </main>

      <style jsx>{`
        main {
          padding: var(--space-sm);
          padding-top: var(--space-xs);
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
        }

        .data-grid-wrap {
          display: flex;
          height: 700px;
          width: 100%;

          :global(.danger) {
            background-color: rgba(255, 0, 0, 0.033);

            &:hover {
              background-color: rgba(255, 0, 0, 0.053);
            }
          }
        }
      `}</style>
    </>
  );
};

const ExportToolbar = () => {
  return (
    <GridToolbarExport
      excelOptions={{
        columnsStyles: {},
      }}
    />
  );
};

export default Report;
