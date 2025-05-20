// Utilidad para usar SweetAlert2 fácilmente en React
import Swal from 'sweetalert2';

export function confirmDelete(text: string = '¿Confirmas la eliminación?') {
  return Swal.fire({
    text,
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'No, cancelar',
    customClass: {
      confirmButton: 'btn-primary text-sm',
      cancelButton: 'btn-red text-sm',
      popup: 'rounded-3xl p-6',
    },
  });
}
