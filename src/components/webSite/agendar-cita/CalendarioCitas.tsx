"use client";
import { Calendar } from "@nextui-org/calendar";
import { RadioGroup, Radio } from "@nextui-org/radio";
import { today, getLocalTimeZone, parseDate } from "@internationalized/date";
import { useLocale } from "@react-aria/i18n";
import { useCalendarioStore } from "@/store/servicios/useCalendarioStore";
import { useEffect, useState } from "react";
import { DateValue } from "@react-aria/calendar";

export const CalendarioCitas = () => {
  const calendario = useCalendarioStore((state) => state.calendario);
  const getCalendario = useCalendarioStore((state) => state.dataCalendario);
  const [selectedDate, setSelectedDate] = useState<DateValue | null>(null);
  const [availableHours, setAvailableHours] = useState<string[]>([]);

  useEffect(() => {
    getCalendario("tjyep661z5arkq034sq8h9yv");
  }, []);

  let { locale } = useLocale();

  console.log(locale);

  // Extraer las fechas disponibles de dias_trabajos
  const availableDates = calendario.flatMap((cita) =>
    cita.horarios.dias_trabajos.map((dia) => ({
      start: dia.fecha_inicio,
      end: dia.fecha_final,
    })),
  );

  // Configuración de fechas no disponibles
  let isDateUnavailable = (date: DateValue) => {
    // Deshabilitar fechas fuera de las disponibles
    return !availableDates.some(
      (interval) =>
        date.compare(parseDate(interval.start)) >= 0 &&
        date.compare(parseDate(interval.end)) <= 0,
    );
  };

  // Manejar selección de fecha y cargar horarios
  const handleDateSelect = (date: DateValue) => {
    setSelectedDate(date);
    const selectedHours = calendario.flatMap((cita) =>
      cita.horarios.dias_trabajos.some(
        (dia) =>
          date.compare(parseDate(dia.fecha_inicio)) >= 0 &&
          date.compare(parseDate(dia.fecha_final)) <= 0,
      )
        ? cita.horarios.horas_trabajos.map((hora) => hora.hora_inicio)
        : [],
    );
    setAvailableHours(selectedHours);
  };

  return (
    <>
      <Calendar
        aria-label="Calendario de citas"
        isDateUnavailable={isDateUnavailable}
        onChange={handleDateSelect}
      />

      {selectedDate && availableHours.length > 0 && (
        <RadioGroup
          label="Selecciona un horario"
          value={selectedDate.toString()}
          onChange={(e) => console.log("Horario seleccionado:", e.target.value)}
        >
          {availableHours.map((hora, index) => (
            <Radio key={index} value={hora}>
              {hora}
            </Radio>
          ))}
        </RadioGroup>
      )}
    </>
  );
};
