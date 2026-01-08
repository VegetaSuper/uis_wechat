import { ref, onUnmounted, type Ref } from 'vue';

interface UseCountdownReturn {
  /** 倒计时秒数 */
  countdown: Ref<number>;
  /** 是否正在发送中 */
  sending: Ref<boolean>;
  /** 开始倒计时 */
  startCountdown: () => void;
  /** 清除倒计时 */
  clearCountdown: () => void;
}

/**
 * 验证码倒计时Hook
 * @param seconds 倒计时秒数，默认60秒
 */
export default function useCountdown(seconds: number = 60): UseCountdownReturn {
  let timer: number | null = null;
  const countdown = ref(0);
  const sending = ref(false);

  // 清除倒计时
  function clearCountdown() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    sending.value = false;
    countdown.value = 0;
  }

  // 开始倒计时
  function startCountdown() {
    clearCountdown();
    countdown.value = seconds;
    sending.value = true;
    timer = setInterval(() => {
      countdown.value--;
      if (countdown.value <= 0) {
        clearCountdown();
      }
    }, 1000) as unknown as number;
  }

  // 组件卸载时清除定时器
  onUnmounted(() => {
    clearCountdown();
  });

  return {
    countdown,
    sending,
    startCountdown,
    clearCountdown
  };
}
